export interface IDefaultProperties {}

export class DefaultProperties implements IDefaultProperties {
  static toString(properties: IDefaultProperties): string;
  static toString(
    defaultProperties: IDefaultProperties,
    properties: IDefaultProperties
  ): string;

  static toString(arg1: IDefaultProperties, arg2?: IDefaultProperties): string {
    if (arg2 === undefined) {
      const properties = arg1;
      if (!properties) return "";
      let classNames: string = "";
      Object.entries(properties).forEach(([key, value]) => {
        classNames += `${value} `;
      });
      return classNames.trim();
    } else {
      const defaultProperties = arg1;
      const properties = arg2;

      if (!defaultProperties || !properties) return "";

      return `${DefaultProperties.toString(
        defaultProperties
      )} ${DefaultProperties.toString(properties)}`.trim();
    }
  }
}
