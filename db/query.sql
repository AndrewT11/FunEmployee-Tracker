-- allEmployeesByManager
select * from employee where role = Manager;

--  allEmployeesByDept
select * from employee group by department;