interface ID {
  id: number;
}

export function trackById(index: number, entity: ID): number {
  return entity.id;
}
