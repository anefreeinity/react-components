import { Parent, ParentProperties } from "./parent";
import { DefaultProperties, IDefaultProperties } from "./property";

export interface ChildProperties extends IDefaultProperties {
  backgroundOnHover: string;
  borderOnHover: string;
}

export const DEFAULTCHILDPROPERTIES: ChildProperties = {
  backgroundOnHover: "hover:bg-blue-300 bg-opacity-100",
  borderOnHover: "hover:border-green-600 rounded-md",
};

export class Child extends Parent {
  private _properties: ChildProperties = DEFAULTCHILDPROPERTIES;

  get Properties(): ChildProperties {
    return this._properties;
  }

  get PropertyClassNames(): string {
    return DefaultProperties.toString(this.ParentProperties, this._properties);
  }

  constructor(
    properties: ChildProperties | null = null,
    parentProperties: ParentProperties | null = null
  ) {
    super(parentProperties);
    if (properties) {
      this._properties = properties;
    }
  }
}
