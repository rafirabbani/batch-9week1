-- Min and Max salary

select first_name, last_name, salary from employees
where
salary = (select max(salary) from employees)
union
select first_name, last_name, salary from employees
where
salary = (select min(salary) from employees)
order by salary desc

