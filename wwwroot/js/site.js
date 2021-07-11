// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// To Show popup when Click on Create

let AddButton = document.getElementById('AddButton');
AddButton.addEventListener('click', function () {

    debugger;
    $('#Employeeid').val("");
    $('#Employeename').val("");
    $('#Empsalary').val("");
    $('#Department').val("");
    $('#exampleModal').modal('show');



})


// To Submit data in database


$(document).ready(function () {


    $("#SubmitButton").click(function (e) {

        var EmployeeData = $("#PopUpForm").serialize()
        $.ajax({

            url: "/Employee/AddOrUpdate",
            type: "Post",
            dataType: 'json',
            data: EmployeeData,

           
        });

    });

});



// to Edit Data 


function EditButtonClick(id) {
    debugger
    $.ajax({

        url: "/Employee/AddOrUpdate",
        type: "GET",
        dataType: 'json',
        data: { Id: id },

        success: function (response) {
            $('#Employeeid').val(response.employeeid);
            $('#Employeename').val(response.employeename);

            $('#Empsalary').val(response.empsalary);
            $('#Department').val(response.department);
            $('#exampleModal').modal('show');
        },
        error: function (xhr, status, error) {
            alert("this code is in error Mode");
        }
    });


}


// For Delete


function DeleteButtonClick(id) {
    debugger
    alert("Are You Sure You Want to delete this");
    $.ajax({

        url: "/Employee/Delete",
        type: "Get",
        dataType: 'json',
        data: { Id: id },

        success: function (response) {
            alert("Are You Sure You Want to delete this");
        }
        //error: function (xhr, status, error) {
        //    alert("this code is in error Mode");
        //}
    });


}