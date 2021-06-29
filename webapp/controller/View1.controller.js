sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("demos.controller.View1", {
			onInit: function () {
                
                
            },
            	onMagic : function(){
				//Binding using JS code in controller
				//Syntax-1
				var oSalary = this.getView().byId("idSal");
				oSalary.bindValue("/empStr/salary");
                //Syntax-2
				var oCur = this.getView().byId("idCur");
                oCur.bindProperty("value","/empStr/currency");

                //  How to get the Model Object from Componet 
                //  var oModel = this.getOwnerComponent().getModel();

                //   How to get the value from model using path
                //   oModel.getProperty("/empStr/empName"); 


                //   How to set or change the model object by giving path and value
                //    oModel.setProperty("/empStr/empName","Roger"); 

                //   How to change the binding mode
                //   oModel.setDefaultBindingMode("OneWay");
            }
            // onAfterRendering: function() {
            //    var oModel = this.getOwnerComponent().getModel();
            //    oModel.setProperty("/empStr/salary","300000"); 
			// }


        //     validateData : function(oName, oPwd){
        //         if(oName.getValue() == "Pitabash" && oPwd.getValue() == "Pitabash"){
		// 			alert("Login Success");
        //             }
        //             else
        //             {
        //                 alert("Failed to login");
        //             }
        //     },
        //     onPress : function(){
        //         var oName = this.getView().byId("idName");
		// 	    var oPwd = this.getView().byId("idPwd");
			
		// 	    this.validateData(oName,oPwd);
        //     }
		 });
	});
