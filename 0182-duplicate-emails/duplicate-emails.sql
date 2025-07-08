-- Write your PostgreSQL query statement below
select email 
from Person
GROUP BY email
having count(*) >1;