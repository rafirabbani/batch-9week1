-- Salary +100 for masa_kerja <= 25

select r.first_name, r.last_name, r.full_name, r.hire_date, r.masa_kerja, (r.salary + 100) as new_salary from (select y.first_name, y.last_name, y.full_name, y.hire_date, y.masa_kerja, y.salary from (select e.first_name, e.last_name, concat(e.first_name, ' ', e.last_name) as full_name, 
e.hire_date, age(e.hire_date) as masa_kerja, e.salary
from employees as e
group by e.first_name, e.last_name, e.hire_date, e.salary) as y
where extract(years from y.masa_kerja) <= 25 ) as r
