export const EXPENSE_LOAD = 'EXPENSE_LOAD';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export function expenses(state = [], { type, payload }) {
  switch(type) {
    case EXPENSE_LOAD:
      return payload;
    case EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    case EXPENSE_UPDATE:
      return state.map(expense => expense.key === payload.key ? payload : expense);
    case EXPENSE_REMOVE:
      return state.filter(expense => expense.key !== payload);
    default:
      return state;
  }
}
