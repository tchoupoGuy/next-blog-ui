export class HomeData {
  _title: string | undefined;
  private _fullName: string | undefined;
  private _position: string | undefined;
  _imgUrl: string | undefined;
  constructor(data: any) {
    this._title = data.title;
    this._fullName = data.fullName;
    this._position = data.position;
    this._imgUrl = data.imgUrl;
  }

  // get title() {
  //   return this._title as string;
  // }
  // set title(value: string) {
  //   this._title = value;
  // }

  get fullName() {
    return this._fullName as string;
  }
  set fullName(value: string) {
    this._fullName = value;
  }
  get position() {
    return this._position as string;
  }
  set position(value: string) {
    this._position = value;
  }
  get imgUrl() {
    return this._imgUrl as string;
  }
  set imgUrl(value: string) {
    this._imgUrl = value;
  }
}
