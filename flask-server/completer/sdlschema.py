import re

class SDLSchema:
    def __init__(self):
        self.sdl = self.clean_sdl()
    
    def clean_sdl(self) -> str:
        sdl = open('./resources/schema.graphql', 'r').read()
        sdl = re.sub(r'\n\s*#.*\n', '\n', sdl)
        sdl =  re.sub(r'\s+', ' ', sdl)
        return sdl