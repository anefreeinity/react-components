import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

export interface ITreeNode {
  children: ITreeNode[];
  icon: IconDefinition | null;
  iconOnClick: IconDefinition | null;
  name: string;
  level: number;
  isFolder: boolean;
}

export class TreeNode implements ITreeNode {
  children: ITreeNode[] = [];
  icon: IconDefinition | null = faFolder;
  iconOnClick: IconDefinition | null = faFolderOpen;
  name: string = "name";
  level: number = 1;
  isFolder: boolean = true;

  constructor(
    name: string = "name",
    icon: IconDefinition | null = faFolder,
    iconOnClick: IconDefinition | null = faFolderOpen,
    isFolder: boolean = true
  ) {
    this.name = name;
    this.icon = icon;
    this.iconOnClick = iconOnClick;
    this.isFolder = isFolder;
  }

  insert(node: ITreeNode): void {
    node.level = this.level + 1;
    this.children.push(node);
  }

  demo(): ITreeNode {
    let parentNode = new TreeNode("My drive");
    let firsttchildone = new TreeNode("Favorite songs");
    let firsttchiltwo = new TreeNode("Favorite videos");
    let firsttchildthree = new TreeNode("image.jpg", faFile, faFile, false);
    parentNode.insert(firsttchildone);
    parentNode.insert(firsttchiltwo);
    parentNode.insert(firsttchildthree);

    let firsttchildonesecondchildone = new TreeNode("Hindi songs");
    let firsttchildonesecondchildtwo = new TreeNode("English songs");
    let firsttchiltwosecondchiltwo = new TreeNode("Study materials");
    firsttchildone.insert(firsttchildonesecondchildone);
    firsttchildone.insert(firsttchildonesecondchildtwo);
    firsttchiltwo.insert(firsttchiltwosecondchiltwo);

    let firsttchildonesecondchildonethirdchildone = new TreeNode(
      "Old Classics songs"
    );
    let firsttchildonesecondchildonethirdchildtwo = new TreeNode(
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
