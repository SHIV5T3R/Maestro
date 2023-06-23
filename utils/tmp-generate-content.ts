import { ItemData } from '../components/FileView/Item'
import { sortContent } from './sort-content'

// This function is a temporary solution to generate content for the FileView component.
// It's to be replaced with proper directory listing.
export function tmp_generateContent(numContent: number) {
  const data: ItemData[] = []

  for (let i = 0; i < numContent; i++) {
    const isDirectory = Math.floor(Math.random() * 2) === 1

    data.push({
      id: String(i),
      title: isDirectory ? `Folder ${i + 1}` : `File ${i + 1}`,
      isDirectory
    })
  }

  const dataSortedByDirsFirst = data.sort((a, b) => sortContent(a, b, true))

  return dataSortedByDirsFirst
}
