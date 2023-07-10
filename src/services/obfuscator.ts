import Hashids from 'hashids';

const hashids = new Hashids(process.env.HASHIDS_SALT, 8);

export const Obfuscator = {
  encode: (id: number) => {
    return hashids.encode(id);
  },

  decode: (id: string) => {
    if (hashids.isValidId(id)) {
      return hashids.decode(id)[0] as number;
    }

    return -1;
  },
};
