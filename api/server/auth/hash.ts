import * as bcrypt from 'bcrypt';

const saltRounds = 10;

const hashing = {
  /**
   * Hash the given password
   * @param password 
   */
  hashNewPassword(password: string): Promise<string> {
    return bcrypt.hash(password, saltRounds);
  },

  /**
   * Compare a given password and a given hashed password
   * @param password 
   * @param hash 
   */
  comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
};

export default hashing;
