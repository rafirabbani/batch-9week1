select * from (select e.department_id, department_name, count(e.first_name) as total_employee from employees as e
join
departments on e.department_id = departments.department_id
group by e.department_id, departments.department_name) as out
where out.total_employee = 1 and out.department_id != 4
