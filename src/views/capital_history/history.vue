<template>
  <div class="container-history">
    <h3>ประวัติรายชื่อผู้ได้รับทุน</h3>
    <form class="row row-cols-lg-auto g-2 align-items-center">
        <div class="row" id="ID">
          <label for="staticEmail" class="col-sm-2 col-form-label">ID</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="autoSizingInput" placeholder="รหัสนิสิต">
          </div>
        </div>
      <div class="row" id="Type">
          <label for="staticEmail" class="col-sm-4 col-form-label">ประเภททุน</label>
        <div class="row col-8">
          <select class="form-select" aria-label="">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row " id="Name">
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
        <datalist id="datalistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>
      </div>
      <div class="row" id="Year">
       <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      </div>
      <div class="row col-12">
        <button type="button" class="btn btn-danger">ค้นหา<i class="fas fa-search"></i></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .container-history{
    width: 100%;
    text-align: center;
    border: 1px solid red;
    height: 100%;
  }
  .container-history form{
    width: 100%;
    margin:30px 0;
    border: 1px solid red;
  }
  .container-history #ID,#Type,#Name,#Year{
    margin: auto;
    align-items: center;
    justify-content: center;
    border: 1px solid hotpink;
  }
  
</style>