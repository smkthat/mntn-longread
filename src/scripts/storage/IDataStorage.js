/**
 * A class that serves as an interface for data storage operations.
 *
 * @class IDataStorage
 */
export default class IDataStorage {
  /**
   * Saves the given data to the data storage using the specified key.
   *
   * @param {string} key - The key used to store the data.
   * @param {any} data - The data to be saved.
   * @throws {Error} Method 'save()' must be implemented.
   * @return {void} This function does not return anything.
   */
  save(key, data) {
    console.log(`Saving data with key: ${key}`, data);
    throw new Error("Method 'save()' must be implemented.");
  }

  /**
   * Loads data from storage based on the provided key.
   *
   * @param {string} key - The key used to retrieve the data from storage.
   * @throws {Error} Method 'load()' must be implemented.
   * @return {void} This function does not return anything.
   */
  load(key) {
    console.log(`Loading data for key: ${key}`);
    throw new Error("Method 'load()' must be implemented.");
  }

  /**
   * Deletes the data associated with the specified key.
   *
   * @param {string} key - The key of the data to be deleted.
   * @throws {Error} Method 'delete()' must be implemented.
   * @return {void} This function does not return anything.
   */
  delete(key) {
    console.log(`Deleting data for key: ${key}`);
    throw new Error("Method 'delete()' must be implemented.");
  }
}
