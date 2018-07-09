// tslint:disable no-console
import * as parse from 'csv-parse'
import * as fs from 'fs'
import * as path from 'path'

export async function loadCSV(csvFile: string, loader: (...columns: string[]) => any) { // tslint:disable-line no-any
  const file: any = () => new Promise((resolve: any) => { // tslint:disable-line no-any
    const csvData: any = {} // tslint:disable-line no-any
    if (fs.existsSync(csvFile)) {
      fs.createReadStream(csvFile)
        .pipe(parse({delimiter: ','}))
        .on('data', (csvrow: string[]) => { // tslint:disable-line no-any
            const r = loader(...csvrow)
            if (parseInt(r.city_id, 10) > 0) {
              csvData[r.city_id] = r
              // console.log({r})
            }
        })
        .on('end', () => {
          // do something wiht csvData
          resolve(csvData)
        })
    } else {
      throw new Error('File not found: ' + csvFile)
    }
  })

  try {
    return await file()
  } catch (error) {
    console.error(error)
  }
}

const PWD =  process.cwd() // process.env.NODE_ENV === 'production' ? : path.join(process.cwd(), 'build')
export const staticFilePath = (fileName: string) => path.join(PWD, 'build', 'server', 'assets', fileName)

export async function asyncForEach(array: any, callback: any) { // tslint:disable-line no-any
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export async function asyncFilter(array: any, callback: any): Promise<any> {  // tslint:disable-line no-any
  return (await Promise.all(array.map(async (item: any) => {    // tslint:disable-line no-any
      return (await callback(item)) ? item : undefined
  }))).filter(i => i !== undefined)
}
