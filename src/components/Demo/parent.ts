import { DefaultProperties } from "./property";

export interface ParentProperties extends DefaultProperties {
  background: string;
  border: string;
}

export const DEFAULTPARENTPROPERTIES: ParentProperties = {
  background: "bg-red-500 bg-opacity-50",
  border: "border border-white rounded-md",
};

export class Parent {
  private _parentProperties: ParentProperties = Object.assign(
    {},
    DEFAULTPARENTPROPERTIES
  );

  get ParentProperties(): ParentProperties {
    return this._parentProperties;
  }

  get ParentPropertyClassNames(): string {
    return DefaultProperties.toString(this._parentProperties);
  }

  constructor(properties: ParentProperties | null = null) {
    if (properties) {
      this._parentProperties = properties;
    }
  }
}
