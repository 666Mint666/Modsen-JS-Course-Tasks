// Класс "Сотрудник"
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  // Класс "Менеджер", наследующий от "Сотрудник"
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    getAnnualSalary() {
      // Добавляем бонус в 10% к годовой зарплате
      return super.getAnnualSalary() * 1.1;
    }
  }
  
  // Создаем два экземпляра "Менеджер"
  const manager1 = new Manager("Иван", 5000, "Отдел продаж");
  const manager2 = new Manager("Анна", 6000, "Финансовый отдел");
  
  // Рассчитываем годовую зарплату менеджеров
  console.log(`Годовая зарплата ${manager1.name}: ${manager1.getAnnualSalary()}`);
  console.log(`Годовая зарплата ${manager2.name}: ${manager2.getAnnualSalary()}`);
  