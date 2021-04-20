export class Country {
  private _name: string;
  private _nativeName: string;
  private _alpha3Code: string;
  private _population: number;
  private _region: string;
  private _subregion: string;
  private _capital: string;
  private _flag: string;
  private _topLevelDomain: string[];
  private _currencies: {name: string}[];
  private _languages: {name: string}[];
  private _borders: string[];

  constructor(obj?: any) {
    this._name = obj && obj.name || '';
    this._nativeName = obj && obj.nativeName || '';
    this._alpha3Code = obj && obj.alpha3Code || '';
    this._population = obj && obj.population || null;
    this._region = obj && obj.region || '';
    this._subregion = obj && obj.subregion || '';
    this._capital = obj && obj.capital || '';
    this._flag = obj && obj.flag || '';
    this._topLevelDomain = obj && obj.topLevelDomain || [];
    this._currencies = obj && obj.currencies || [];
    this._languages = obj && obj.languages || [];
    this._borders = obj && obj.borders || [];
  }

  get name() { return this._name; }
  get nativeName() { return this._nativeName; }
  get alpha3Code() { return this._alpha3Code; }
  get population() { return this._population; }
  get region() { return this._region; }
  get subregion() { return this._subregion; }
  get capital() { return this._capital; }
  get flag() { return this._flag; }
  get topLevelDomain() { return this._topLevelDomain; }
  get currencies() { return this._currencies; }
  get languages() { return this._languages; }
  get borders() { return this._borders; }
}