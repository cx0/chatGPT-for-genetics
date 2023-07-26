from setuptools import setup, find_packages

setup(
    name="opentargets",
    version="0.1",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'openai',
        'click',
        'flask',
        'flask-cors'
    ],
    entry_points="""
        [console_scripts]
        opentargets=chat_cli:cli
    """
)
