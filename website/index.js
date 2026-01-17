 $(document).ready(function(){

  $("#addTask").click(function(){

    let task = $("#taskInput").val();

    if(task !== ""){
      $("#taskList").append(
        "<li>" + task + " <button class='delete'>Delete</button></li>"
      );
      $("#taskInput").val("");
    }

  });

  $(document).on("click", ".delete", function(){
    $(this).parent().remove();
  });

});


