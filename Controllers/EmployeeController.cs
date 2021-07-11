using Microsoft.AspNetCore.Mvc;
using MYTHIRDLECTURE1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MYTHIRDLECTURE1.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly CompanyContext context;

        public EmployeeController(CompanyContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            var emp = context.Employees.ToList();
            return View(emp);
        }
        public IActionResult AddOrUpdate(int? Id)
        {
            var data = context.Employees.Find(Id);
            return Json(data);
        }
        [HttpPost]
        public IActionResult AddOrUpdate(Employee obj)
        {
            if(obj.Employeeid == 0)
            {
                context.Employees.Add(obj);
                context.SaveChanges();
            }
            else
            {
                var data = context.Employees.Find(obj.Employeeid);
                data.Employeename = obj.Employeename;
                data.Empsalary = obj.Empsalary;
                data.Department = obj.Department;
                context.SaveChanges();

            }
            return RedirectToAction("Index");
        }
        public IActionResult Delete(int? Id)
        {
            var data = context.Employees.Find(Id);
            context.Employees.Remove(data);
            context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
