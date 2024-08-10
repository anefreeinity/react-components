import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

export interface ITreeNode {
  id: number;
  children: ITreeNode[];
  icon: IconDefinition | null;
  iconOnClick: IconDefinition | null;
  name: string;
  level: number;
  isFolder: boolean;
}

export class TreeNode implements ITreeNode {
  id: number;
  children: ITreeNode[] = [];
  icon: IconDefinition | null = faFolder;
  iconOnClick: IconDefinition | null = faFolderOpen;
  name: string = "name";
  level: number = 1;
  isFolder: boolean = true;

  constructor(
    id: number = 0,
    name: string = "name",
    icon: IconDefinition | null = faFolder,
    iconOnClick: IconDefinition | null = faFolderOpen,
    isFolder: boolean = true
  ) {
    this.name = name;
    this.icon = icon;
    this.iconOnClick = iconOnClick;
    this.isFolder = isFolder;
    this.id = id;
  }

  insert(node: ITreeNode): void {
    node.level = this.level + 1;
    this.children.push(node);
  }

  demo(): ITreeNode {
    let parentNode = new TreeNode(1, "My drive");
    let firsttchildone = new TreeNode(2, "Favorite songs");
    let firsttchiltwo = new TreeNode(3, "Favorite videos");
    let firsttchildthree = new TreeNode(4, "image.jpg", faFile, faFile, false);
    parentNode.insert(firsttchildone);
    parentNode.insert(firsttchiltwo);
    parentNode.insert(firsttchildthree);

    let firsttchildonesecondchildone = new TreeNode(5, "Hindi songs");
    let firsttchildonesecondchildtwo = new TreeNode(6, "English songs");
    let firsttchiltwosecondchiltwo = new TreeNode(7, "Study materials");
    firsttchildone.insert(firsttchildonesecondchildone);
    firsttchildone.insert(firsttchildonesecondchildtwo);
    firsttchiltwo.insert(firsttchiltwosecondchiltwo);

    let firsttchildonesecondchildonethirdchildone = new TreeNode(
      8,
      "Old classical songs"
    );
    let firsttchildonesecondchildonethirdchildtwo = new TreeNode(
      9,
      "Arijit singh songs"
    );

    firsttchildonesecondchildone.insert(
      firsttchildonesecondchildonethirdchildone
    );
    firsttchildonesecondchildone.insert(
      firsttchildonesecondchildonethirdchildtwo
    );

    return parentNode;
  }
}
