class Team {
  constructor() {
    this.members = new Set();
  }

  add(user) {
    if (this.members.has(user)) throw new Error('Персонаж уже существует!');
    this.members.add(user);
  }

  addAll(userAll) {
    this.members = new Set([...this.members, ...userAll]);
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let current = 0;
    const last = members.length;

    return {
      next() {
        if (current < last) {
          const person = members[current];
          current += 1;
          return {
            done: false,
            value: person,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

export default Team;
