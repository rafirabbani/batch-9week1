--Masa Kerja

select y.first_name, y.last_name, y.full_name, y.hire_date, y.masa_kerja from (select e.first_name, e.last_name, concat(e.first_name, ' ', e.last_name) as full_name, 
hire_date, age(hire_date) as masa_kerja
from employees as e
group by e.first_name, e.last_name, e.hire_date) as y
where extract(years from y.masa_kerja) <= 25 