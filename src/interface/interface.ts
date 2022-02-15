//Characters
export interface CharactersInfo {
  id: number;
  name: string;
  gender: string;
  image: string;
}

export interface CharactersData {
  characters: any;
  charactersInfo: CharactersInfo[];
}

//Character
export interface CharacterInfo {
  id: number;
  name: string;
  gender: string;
  image: string;
  episode: {
    name: string;
    episode: string;
  };
}

export interface CharacterData {
  character: any;
  characterInfo: CharacterData[];
}
