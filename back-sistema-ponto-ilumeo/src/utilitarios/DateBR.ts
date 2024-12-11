export const DateBR = {
    set(date: Date) {
      return new Date(date.setHours(date.getHours() - 3))
    },
  
    get(date: Date) {
      return new Date(date.setHours(date.getHours() + 3))
    },
  }
  