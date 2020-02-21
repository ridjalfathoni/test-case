import { ENTITY_KEY } from '../../common/app-const';
import { loadEntity } from 'redux-entity';
import ExampleDomainService from '../../services/domain/example-domain-service';

export function fetchToDo () {
  return loadEntity(
    ENTITY_KEY.TODO,
    ExampleDomainService.getToDoList()
  )
}

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchFoo () {
  return loadEntity(
    ENTITY_KEY.FOO,
    ExampleDomainService.getFakePromise()
  );
}

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchBar () {
  return loadEntity(
    ENTITY_KEY.BAR,
    ExampleDomainService.getFakePromise(),
    { append: true }
  );
}

/**
 * Thunk action that simulates a delayed, failed API call
 * @returns {Function}  thunk
 */
export function fetchBaz () {
  return loadEntity(
    ENTITY_KEY.BAZ,
    ExampleDomainService.getFakePromise(true)
      .catch(error => {
        console.error(error);
      })
  );
}
