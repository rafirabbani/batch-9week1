-- Total employee per job role

select job_id, job_title, count(first_name) as total_employee from (select j.job_id, j.job_title, first_name from jobs as j
join
employees on j.job_id = employees.job_id) as a
group by a.job_id, a.job_title

