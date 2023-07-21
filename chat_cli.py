import click
from pathlib import Path
from completer.chat import Chat

@click.group(invoke_without_command=True)
@click.pass_context
def cli(ctx):
    if ctx.invoked_subcommand is None:
        click.secho("Welcome to OpenTargets CLI!", bold=True, fg="blue")
        chat = Chat()
        user_input = click.prompt('Please enter a question')
        
        click.secho('Querying the Open Targets API...', fg='green', bold=True)
        
        chat.interpret(user_input)
        
        folders = ['suggestions', 'results', 'interpretations']
        for folder in folders:
            path = Path(f'logs/{folder}')
            click.secho(f"Saved log file to 'logs/{folder}'", fg='green', bold=True)

@cli.command()
@click.argument('user_input', required=False)
def suggest(user_input=None):
    chat = Chat()
    if user_input is None:
        user_input = click.prompt('Please enter a question')
    click.secho('Generating suggestion...', fg='blue', bold=True)
    chat.suggest(user_input)

@cli.command()
@click.argument('user_input', required=False)
def complete(user_input=None):
    chat = Chat()
    if user_input is None:
        user_input = click.prompt('Please enter a question')
    click.secho('Completing...', fg='blue', bold=True)
    chat.complete(user_input)

@cli.command()
@click.argument('user_input', required=False)
def interpret(user_input=None):
    chat = Chat()
    if user_input is None:
        user_input = click.prompt('Please enter a question')
    click.secho('Querying the Open Targets API...', fg='green', bold=True)
    click.secho('Interpreting...', fg='blue', bold=True)
    chat.interpret(user_input)

@cli.command()
def delete_logs():
    """Delete all log files in logs/suggestions, logs/results, logs/interpretations"""
    folders = ['suggestions', 'results', 'interpretations']
    for folder in folders:
        path = Path(f'logs/{folder}')
        files = path.glob('*.json')
        for file in files:
            file.unlink()
        click.secho(f"Deleted all log files in 'logs/{folder}'", fg='green', bold=True)

if __name__ == "__main__":
    cli()
