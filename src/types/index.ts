export interface PlanetType{
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface PeopleType{
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string;
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string; 
}

export interface StarshipType{
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGTLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface FilmType{
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string;
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}

export interface SpecieType{
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface VehicleType{
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passangers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string;
    films: string[];
    created: string;
    edited: string;
    url: string;    
}

export interface PlanetStateType{
    planetsData?: PlanetType[];
    showPlanetDetailsFlag: boolean;
    currentPlanetData?: PlanetType;
    planetId: string;
}


export interface PeopleArrTypeData{
    peopleData: PeopleType[];
    planetId: string; 
}

export interface PeopleStateType{
    womenDisplayFlag: boolean;
    menDisplayFlag: boolean;
    peopleDataArr: PeopleArrTypeData[];
}