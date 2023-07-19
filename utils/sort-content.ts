import { ItemData } from '../components/FileView/Item'

export function sortContent(
  a: ItemData,
  b: ItemData,
  directoriesFirst: boolean
) {
  if (a.isDirectory && !b.isDirectory) {
    return directoriesFirst ? -1 : 1
  } else if (!a.isDirectory && b.isDirectory) {
    return directoriesFirst ? 1 : -1
  }

  return 0
}
