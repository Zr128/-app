class Library {
    constructor(openTime, closeTime) {
      this.books = [];
      this.openTime = openTime;
      this.closeTime = closeTime;
      this.seats = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(book) {
      const index = this.books.indexOf(book);
      if (index > -1) {
        this.books.splice(index, 1);
        return true;
      }
      return false;
    }
  
    searchBook(title) {
      return this.books.find(book => book.title === title);
    }
  
    reserveSeat(seat) {
      if (!seat.isReserved) {
        seat.isReserved = true;
        return true;
      }
      return false;
    }
  
    releaseSeat(seat) {
      if (seat.isReserved) {
        seat.isReserved = false;
        return true;
      }
      return false;
    }
  }
  class Cafeteria {
    constructor() {
      this.menu = [];
      this.highSalesItems = [];
    }
  
    addToMenu(item) {
      this.menu.push(item);
    }
  
    removeFromMenu(item) {
      const index = this.menu.indexOf(item);
      if (index > -1) {
        this.menu.splice(index, 1);
        return true;
      }
      return false;
    }
  
    getMenu() {
      return this.menu;
    }
  
    updateHighSalesItems() {
      this.highSalesItems = this.menu.filter(item => item.sales > 100);
    }
  
    getHighSalesItems() {
      return this.highSalesItems;
    }
  }
  class Gym {
    constructor(openTime, closeTime) {
      this.available = true;
      this.bookings = [];
      this.openTime = openTime;
      this.closeTime = closeTime;
      this.equipment = [];
    }
  
    bookSlot(user) {
      if (this.available) {
        this.bookings.push(user);
        this.available = false;
        return true;
      }
      return false;
    }
  
    cancelBooking(user) {
      const index = this.bookings.indexOf(user);
      if (index > -1) {
        this.bookings.splice(index, 1);
        if (this.bookings.length === 0) {
          this.available = true;
        }
        return true;
      }
      return false;
    }
  
    addEquipment(equipment) {
      this.equipment.push(equipment);
    }
  
    removeEquipment(equipment) {
      const index = this.equipment.indexOf(equipment);
      if (index > -1) {
        this.equipment.splice(index, 1);
        return true;
      }
      return false;
    }
  
    isEquipmentInUse(equipment) {
      return this.bookings.some(user => user.equipment === equipment);
    }
  }
  class Office {
    constructor() {
      this.students = [];
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  
    removeStudent(student) {
      const index = this.students.indexOf(student);
      if (index > -1) {
        this.students.splice(index, 1);
        return true;
      }
      return false;
    }
  
    getStudentTable() {
      const table = [];
      table.push(['Name', 'Age', 'Grade']);
      this.students.forEach(student => {
        table.push([student.name, student.age, student.grade]);
      });
      return table;
    }
  }