import * as create from './Create';
import * as getbyId from './Get'


export const authorsController = {
  ...create,
  ...getbyId
}