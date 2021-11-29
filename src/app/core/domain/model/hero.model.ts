export class HeroModel {
    id: string;
    name: string;
    image: any;
    description: string;
    "full-name": string;
    biography: {
        "full-name": string;
        "alter-egos": string;
        aliases: string[];
        "place-of-birth": string;
        "first-appearance": string;
        publisher: string;
        alignment: string;
    };
    appearance: {
        gender: string,
        race: string,
        height: string[],
        weight: string[],
        "eye-color": string,
        "hair-color": string
    };
    work: {
        occupation: string;
    }
    powerstats: any;
    response: string;
    results: any;
    checked: boolean = false;
}
