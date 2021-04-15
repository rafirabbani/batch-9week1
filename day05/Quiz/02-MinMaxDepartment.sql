--Min Max department salary

select department_id, department_name, salary from (select e.department_id, department_name, salary from employees as e
join
departments on e.department_id = departments.department_id) as max
where
salary = (select max(salary) from (select e.department_id, department_name, salary from employees as e
join
departments on e.department_id = departments.department_id) as max)
union
select department_id, department_name, salary from (select e.department_id, department_name, salary from employees as e
join
departments on e.department_id = departments.department_id) as min
where
salary = (select min(salary) from (select e.department_id, department_name, salary from employees as e
join
departments on e.department_id = departments.department_id) as min)
order by salary desc