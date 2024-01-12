window.DatPhongController = function ($scope) {
  $scope.table = [
    {
      id: 1,
      ten: "Lê Văn Dương",
      sdt: "987654321",
      email: "duonglvph23089@gmail.com",
      cccd: "1234567890",
      so: "2",
      nhan: "22/02/2022",
      tra: "22/08/2023",
    },
  ];
  $scope.kiemtra = {
    ten: false,
    sdt: false,
    email: false,
    cccd: false,
    so: false,
    nhan: false,
    tra: false,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      ten: "",
      sdt: "",
      email: "",
      cccd: "",
      so: "",
      nhan: "",
      tra: "",
    };
    $scope.editId = 0;
  };
  $scope.onSumbmit = function () {
    //  trường tiêu đề bỏ trống
    var sdt = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var cccd = /^\d{12}$/;
    var flag = false;
    if (!$scope.inputValue || !$scope.inputValue.ten) {
      $scope.kiemtra.ten = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.sdt) {
      $scope.kiemtra.sdt = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.email) {
      $scope.kiemtra.email = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.cccd) {
      $scope.kiemtra.cccd = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.so) {
      $scope.kiemtra.so = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.nhan) {
      $scope.kiemtra.nhan = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.tra) {
      $scope.kiemtra.tra = true;
      flag = true;
    }
    if (flag == false) {
      // sữa
      var editId = $scope.editId;
      if (editId) {
        for (var i = 0; i < $scope.table.length; i++) {
          if ($scope.table[i].id == editId) {
            $scope.table[i].ten = $scope.inputValue.ten;
            $scope.table[i].sdt = $scope.inputValue.sdt;
            $scope.table[i].email = $scope.inputValue.email;
            $scope.table[i].cccd = $scope.inputValue.cccd;
            $scope.table[i].so = $scope.inputValue.so;
            $scope.table[i].nhan = $scope.inputValue.nhan;
            $scope.table[i].tra = $scope.inputValue.tra;
          }
        }
        $scope.setText();
        return;
      }
      // thêm
      var ds = $scope.table;
      var newId = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
      var newItem = {
        id: newId,
        ten: $scope.inputValue.ten,
        sdt: $scope.inputValue.sdt,
        email: $scope.inputValue.email,
        cccd: $scope.inputValue.cccd,
        so: $scope.inputValue.so,
        nhan: $scope.inputValue.nhan,
        tra: $scope.inputValue.tra,
      };
      $scope.table.push(newItem);
      $scope.setText();
    }
  };
  $scope.onEdit = function (editId) {
    $scope.editId = editId;
    var editItem = {
      ten: "",
      sdt: "",
      email: "",
      cccd: "",
      so: "",
      nhan: "",
      tra: "",
    };
    for (var i = 0; i < $scope.table.length; i++) {
      if ($scope.table[i].id == editId) {
        editItem.ten = $scope.table[i].ten;
        editItem.sdt = $scope.table[i].sdt;
        editItem.email = $scope.table[i].email;
        editItem.cccd = $scope.table[i].cccd;
        editItem.so = $scope.table[i].so;
        editItem.nhan = $scope.table[i].nhan;
        editItem.tra = $scope.table[i].tra;
      }
    }
    $scope.inputValue = {
      ten: editItem.ten,
      sdt: editItem.sdt,
      email: editItem.email,
      cccd: editItem.cccd,
      so: editItem.so,
      nhan: editItem.nhan,
      tra: editItem.tra,
    };
  };
  $scope.onDelete = function (deleteId) {
    var confirm = window.confirm("bạn có muốn xóa ko?");
    if (confirm) {
      $scope.table = $scope.table.filter(function (item) {
        return item.id !== deleteId;
      });
    }
  };
};
