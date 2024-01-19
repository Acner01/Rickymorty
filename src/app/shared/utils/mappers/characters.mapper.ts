import { ICharacters } from "../../models/characters.model";

export const mapBkToCharacters = (data: any): ICharacters[] => {
    return data.results.map((res:any) => {
        return {
            name: res.name,
            gender: res.gender,
            origin: res.origin.name,
            createdAt: res.created,
            image: res.image
        }
    })
}