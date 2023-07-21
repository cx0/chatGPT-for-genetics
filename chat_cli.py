import click
from completer.chat import Chat

@click.group(invoke_without_command=True)
@click.pass_context
def cli(ctx):
    if ctx.invoked_subcommand is None:
        chat = Chat()
        user_input = click.prompt('Please enter a question')
        chat.interpret(user_input)

@cli.command()
@click.argument('user_input', required=False)
def suggest(user_input=None):
    """Generate a suggested query"""
    chat = Chat()
    if user_input is None:
        user_input = click.prompt('Please enter a question')
    chat.suggest(user_input)

@cli.command()
@click.argument('user_input', required=False)
def complete(user_input=None):
    """Complete a query"""
    chat = Chat()
    if user_input is None:
        user_input = click.prompt('Please enter a question')
    chat.complete(user_input)

@cli.command()
@click.argument('user_input', required=False)
def interpret(user_input=None):
    """Interpret a query"""
    chat = Chat()
    if user_input is None:
        user_input = click.prompt('Please enter a question')
    chat.interpret(user_input)

if __name__ == "__main__":
    """In the terminal pane, just type: python chat_cli.py"""
    cli()
