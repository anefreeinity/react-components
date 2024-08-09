import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ITreeNode {
  children: ITreeNode[];
  icon: IconDefinition | null;
  name: string;
  level: number;
}

export class TreeNode implements ITreeNode {
  children: ITreeNode[] = [];
  icon: IconDefinition | null = null;
  name: string = "name";
  level: number = 1;

  insert(node: ITreeNode): void {
    node.level = this.level + 1;
    this.children.push(node);
  }

  demo(): ITreeNode {
    let parentNode = new TreeNode();
    let firsttchildone = new TreeNode();
    let firsttchiltwo = new TreeNode();
    parentNode.insert(firsttchildone);
    parentNode.insert(firsttchiltwo);

    let secondchildone = new TreeNode();
    let secondchiltwo = new TreeNode();
    firsttchildone.insert(secondchildone);
    firsttchiltwo.insert(secondchiltwo);

    return parentNode;
  }
}
