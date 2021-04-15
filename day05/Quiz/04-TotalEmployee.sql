--Total employee > 3

select * from (select c.department_id, c.department_name, c.job_id, c.job_title, count(c.first_name) as total_employee
from (select j.department_id, j.department_name, j.job_id, j.first_name, job_title from (select e.department_id, department_name, e.job_id, e.first_name from employees as e
join
departments on e.department_id = departments.department_id) as j
join
jobs on j.job_id = jobs.job_id) as c
group by c.department_id, c.department_name, c.job_id, c.job_title) as out
where out.total_employee > 3
