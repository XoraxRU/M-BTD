/* Calculating value on keyup: */
$(document).ready(function() {
	
	var i = 1;
	
	$(document).on('click', '#add', function(){
		addrow ();
		//TableNumeration();
	});
	
	/* Adding new row */
	function addrow () {
		i++;
		$('#dynamic_field').append('<tr id="row'+i+'"><td style="padding: 1px; width: 4%;"><input class="form-control input-sm class_f_line" type="text" name="line[f_line][]" id="f_line" style="border-radius: 0px;"></td><td style="padding: 1px; width: 9%;"><div class="col-lg-10 w_s"><select class="form-control w_s_op class_f_size" name="line[f_size][]" id="f_size"><option>&nbsp;</option><option>6</option><option>8</option><option>10</option><option>12</option><option>16</option><option>18</option><option>22</option><option>24</option><option>26</option></select></div></td><td style="padding: 1px; width: 11%;"><input class="form-control input-sm class_f_nm" type="text" name="line[f_nm][]" id="f_nm" style="border-radius: 0px;"></td><td style="padding: 1px; width: 6%;"><input class="length calc-input" type="text" name="line[f_ln][]" id="f_ln"></td><td style="padding: 1px; width: 6%;"><input class="width calc-input" type="text" name="line[f_wd][]" id="f_wd"></td><td style="padding: 1px; width: 4%;"><input class="quality form-control input-sm" type="text" name="line[f_qt][]" id="f_qt" style="border-radius: 0px;"></td><td style="padding: 1px; width: 7%;"><div class="col-lg-10 edge_s"><select class="form-control edge_s_op class_f_rot" name="line[f_rot][]" id="f_rot"><option>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option><option>Да&nbsp;&nbsp;&nbsp;</option></select></div></td><td style="padding: 1px; width: 7%;"><div class="col-lg-10 edge_s"><select class="form-control edge_s_op class_f_ln_1" name="line[f_ln_1][]" id="f_ln_1"><option>-</option><option>0,4</option><!--<option>0,8</option><option>1</option>--><option>2</option><!--<option>3</option>--></select></div></td><td style="padding: 1px; width: 7%;"><div class="col-lg-10 edge_s"><select class="form-control edge_s_op class_f_ln_2" name="line[f_ln_2][]" id="f_ln_2"><option>-</option><option>0,4</option><!--<option>0,8</option><option>1</option>--><option>2</option><!--<option>3</option>--></select></div></td><td style="padding: 1px; width: 7%;"><div class="col-lg-10 edge_s"><select class="form-control edge_s_op class_f_wd_1" name="line[f_wd_1][]" id="f_wd_1"><option>-</option><option>0,4</option><!--<option>0,8</option><option>1</option>--><option>2</option><!--<option>3</option>--></select></div></td><td style="padding: 1px; width: 7%;"><div class="col-lg-10 edge_s"><select class="form-control edge_s_op class_f_wd_2" name="line[f_wd_2][]" id="f_wd_2"><option>-</option><option>0,4</option><!--<option>0,8</option><option>1</option>--><option>2</option><!--<option>3</option>--></select></div></td><td style="padding: 1px; width: 7%;"><input class="length_w_ed calc-input" type="text" name="line[l_w_ed][]" id="l_w_ed" style="background-color: #f5f5f5 !important;" readonly></td><td style="padding: 1px; width: 7%;"><input class="width_w_ed calc-input" type="text" name="line[w_w_ed][]" id="w_w_ed" style="background-color: #f5f5f5 !important;" readonly></td><td style="padding: 1px; width: 7.5%;"><input class="form-control input-sm class_f_inform" type="text" name="line[f_inform][]" id="f_inform" style="border-radius: 0px;"></td><td style="padding: 1px; display:none;"><input class="total_s form-control input-sm uns class_f_mat_s" name="line[f_mat_s][]" id="f_mat_s" readonly ></td><td style="padding: 1px; display:none;"><input class="total_edg_04 form-control input-sm uns class_f_mat_ed04" name="line[f_mat_ed04][]" id="f_mat_ed04" readonly ></td><td style="padding: 1px; display:none;"><input class="total_edg_08 form-control input-sm uns class_f_mat_ed08" name="line[f_mat_ed08][]" id="f_mat_ed08" readonly ></td><td style="padding: 1px; display:none;"><input class="total_edg_1 form-control input-sm uns class_f_mat_ed1" name="line[f_mat_ed1][]" id="f_mat_ed1" readonly ></td><td style="padding: 1px; display:none;"><input class="total_edg_2 form-control input-sm uns class_f_mat_ed2" name="line[f_mat_ed2][]" id="f_mat_ed2" readonly ></td><td style="padding: 1px; display:none;"><input class="total_edg_3 form-control input-sm uns class_f_mat_ed3" name="line[f_mat_ed3][]" id="f_mat_ed3" readonly ></td><td class="print_hide" style="width: 3.5%;"><span name="remove" id="'+i+'" class="btn_remove glyphicon glyphicon-remove" title="Удалить" alt="X"></span></td></tr>');
	}
	
	/* Removing row by click */
	$(document).on('click', '.btn_remove', function() {
		var button_id = $(this).attr("id");
		$('#row'+button_id+'').remove();
		
		/* loading function to get grand total of panels */
		loadtotalpanel();
		
		/* loading function to get grand total S of panels */
		loadgrandtotal();
		
		/* loading function to get grand total of m for 0,4 and 2mm */
		loadgrandedge04(); // total value of each hidden input 'total_04'
		//loadgrandedge08(); // total value of each hidden input 'total_08'
		//loadgrandedge1(); // total value of each hidden input 'total_1'
		loadgrandedge2(); // total value of each hidden input 'total_2'
		//loadgrandedge3(); // total value of each hidden input 'total_3'
		div_showhide(); // to show div with loadgrandedge04 or loadgrandedge2 if value not '0'
		//TableNumeration();
	});
	
	/*
	function TableNumeration() {
		$('.table tbody tr ').each(function(i) {
				$(this).find('td:first').text(i);
		});
	}

	function TableNumeration() {
		$('tbody').each(function(i) {
			var table_line = $('.class_f_line', row);
			
			t_l = parseFloat(table_line.val());
			
			if(!isNaN(t_l)) {
				table_line.val(t_l);
			}
		});
	}        
	*/
	/* Calculating S for each row, checking empty inputs */
	$('tbody').on('keyup', '.length, .width, .quality', function(e) {
		
		var row = $(this).closest('tr');
		var length_s = $('.length', row), 
			width_s = $('.width', row),
			qt_s = $('.quality', row),
			tot_s = $('.total_s', row);
		
		l_s = parseFloat(length_s.val());
		w_s = parseFloat(width_s.val());
		q_s = parseFloat(qt_s.val());
		
		/* Hightlighting emtpy input */
		if($('.length', row).val() == ''){
			$('.length', row).css('background-color' , '#feede6');
		}
		else{
			$('.length', row).css('background-color' , 'white');
		}
		if($('.width', row).val() == ''){
			$('.width', row).css('background-color' , '#feede6');
		}
		else{
			$('.width', row).css('background-color' , 'white');
		}
		if($('.quality', row).val() == ''){
			$('.quality', row).css('background-color' , '#feede6');
		}
		else{
			$('.quality', row).css('background-color' , 'white');
		}
		
		/* to get total when we don't have quality but we have length and width: */
		if( ! isNaN(l_s) && !isNaN(w_s) ) {
			tot_s.val(((w_s*l_s)*0.000001).toFixed(2));
		}
		
		/* to get total when we have quality: */
		if( ! isNaN(l_s) && !isNaN(w_s) && !isNaN(q_s) ) {
			tot_s.val(((w_s*l_s)*0.000001*q_s).toFixed(2));
		}
		
		/* loading function to get grand total of panels */
		loadtotalpanel();
		/* loading function to get grand total S of panels */
		loadgrandtotal();
		
	});
		
		/* receiving value from inputs */
		$('tbody').on('change', '.length, .width, .quality, .class_f_ln_1, .class_f_ln_2, .class_f_wd_1, .class_f_wd_2', function(e) {
		
			var row = $(this).closest('tr');
			var length_s = $('.length', row), 
				width_s = $('.width', row),
				qt_s = $('.quality', row),
				// selects
				length_ed1 = $('.class_f_ln_1', row),
				length_ed2 = $('.class_f_ln_2', row),
				width_ed1 = $('.class_f_wd_1', row),
				width_ed2 = $('.class_f_wd_2', row),
				tot_e_04 = 0,
				tot_e_08 = 0,
				tot_e_1 = 0,
				tot_e_2 = 0,
				tot_e_3 = 0,
				sum = 0.001,
				total_04 = $('.total_edg_04', row), //hidden input in the row
				total_08 = $('.total_edg_08', row), //hidden input in the row
				total_1 = $('.total_edg_1', row), //hidden input in the row
				total_2 = $('.total_edg_2', row); //hidden input in the row
				total_3 = $('.total_edg_3', row), //hidden input in the row
			
			l_s = parseFloat(length_s.val());
			w_s = parseFloat(width_s.val());
			q_s = parseFloat(qt_s.val());
			
			// If select "0,4 мм"
			if(length_ed1.val() == '0,4'){
				tot_e_04 = (tot_e_04 + l_s + 40);
			}
			if(length_ed2.val() == '0,4'){
				tot_e_04 = (tot_e_04 + l_s + 40);
			}
			if(width_ed1.val() == '0,4'){
				tot_e_04 = (tot_e_04 + w_s + 40);
			}
			if(width_ed2.val() == '0,4'){
				tot_e_04 = (tot_e_04 + w_s + 40);
			}
			if(!isNaN(q_s)){
			tot_e_04 = tot_e_04 * q_s * sum;
			total_04.val(tot_e_04);
			}
			
			
			// If select "0,8 мм"
			if(length_ed1.val() == '0,8'){
				tot_e_08 = tot_e_08 + l_s + 40;
			}
			if(length_ed2.val() == '0,8'){
				tot_e_08 = tot_e_08 + l_s + 40;
			}
			if(width_ed1.val() == '0,8'){
				tot_e_08 = tot_e_08 + w_s + 40;
			}
			if(width_ed2.val() == '0,8'){
				tot_e_08 = tot_e_08 + w_s + 40;
			}
			if(!isNaN(q_s)){
			tot_e_08 = tot_e_08 * q_s * sum;
			total_08.val(tot_e_08.toFixed(2));
			}
			
			// If select "1 мм"
			if(length_ed1.val() == '1'){
				tot_e_1 = tot_e_1 + l_s + 40;
			}
			if(length_ed2.val() == '1'){
				tot_e_1 = tot_e_1 + l_s + 40;
			}
			if(width_ed1.val() == '1'){
				tot_e_1 = tot_e_1 + w_s + 40;
			}
			if(width_ed2.val() == '1'){
				tot_e_1 = tot_e_1 + w_s + 40;
			}
			if(!isNaN(q_s)){
			tot_e_1 = tot_e_1 * q_s * sum;
			total_1.val(tot_e_1.toFixed(2));
			}
			
			// If select "2 мм"
			if(length_ed1.val() == '2'){
				tot_e_2 = tot_e_2 + l_s + 40;
			}
			if(length_ed2.val() == '2'){
				tot_e_2 = tot_e_2 + l_s + 40;
			}
			if(width_ed1.val() == '2'){
				tot_e_2 = tot_e_2 + w_s + 40;
			}
			if(width_ed2.val() == '2'){
				tot_e_2 = tot_e_2 + w_s + 40;
			}
			if(!isNaN(q_s)){
			tot_e_2 = tot_e_2 * q_s * sum;
			total_2.val(tot_e_2);
			}
			
			// If select "3 мм"
			if(length_ed1.val() == '3'){
				tot_e_3 = tot_e_3 + l_s + 40;
			}
			if(length_ed2.val() == '3'){
				tot_e_3 = tot_e_3 + l_s + 40;
			}
			if(width_ed1.val() == '3'){
				tot_e_3 = tot_e_3 + w_s + 40;
			}
			if(width_ed2.val() == '3'){
				tot_e_3 = tot_e_3 + w_s + 40;
			}
			if(!isNaN(q_s)){
			tot_e_3 = tot_e_3 * q_s * sum;
			total_3.val(tot_e_3.toFixed(2));
			}
			
			loadgrandedge04(); // total value of each hidden input 'total_04'
			loadgrandedge08(); // total value of each hidden input 'total_08'
			loadgrandedge1(); // total value of each hidden input 'total_1'
			loadgrandedge2(); // total value of each hidden input 'total_2'
			loadgrandedge3(); // total value of each hidden input 'total_3'
			div_showhide(); // to show div with loadgrandedge04 or loadgrandedge2 if value not '0'
		});
		
		/* receiving value from lendth and witdth with edging */
		$('tbody').on('change', '.length, .width, .class_f_ln_1, .class_f_ln_2, .class_f_wd_1, .class_f_wd_2, .length_w_ed, .width_w_ed', function(e) {
		
			var row = $(this).closest('tr');
			var length_s = $('.length', row), 
				width_s = $('.width', row),
				// selects
				length_ed1 = $('.class_f_ln_1', row),
				length_ed2 = $('.class_f_ln_2', row),
				width_ed1 = $('.class_f_wd_1', row),
				width_ed2 = $('.class_f_wd_2', row),
				total_l_w_e = $('.length_w_ed', row),
				total_w_w_e = $('.width_w_ed', row),
			
			l_s = parseFloat(length_s.val());
			w_s = parseFloat(width_s.val());
		
		/* Getting total of width when length edged */
		if(length_ed1.val() == '-' && length_ed2.val() == '-' && !isNaN(w_s)){
			total_w_w_e.val(w_s);
		}
		if(length_ed1.val() == '-' && length_ed2.val() == '0,4' && !isNaN(w_s)){
			total_w_w_e.val(w_s-0.4);
		}
		if(length_ed1.val() == '0,4' && length_ed2.val() == '-' && !isNaN(w_s)){
			total_w_w_e.val(w_s-0.4);
		}
		if(length_ed1.val() == '0,4' && length_ed2.val() == '0,4' && !isNaN(w_s)){
			total_w_w_e.val((w_s-0.4-0.4).toFixed(1));
		}
		if(length_ed1.val() == '0,4' && length_ed2.val() == '2' && !isNaN(w_s)){
			total_w_w_e.val((w_s-0.4-2).toFixed(1));
		}
		if(length_ed1.val() == '-' && length_ed2.val() == '2' && !isNaN(w_s)){
			total_w_w_e.val(w_s-2);
		}
		if(length_ed1.val() == '2' && length_ed2.val() == '-' && !isNaN(w_s)){
			total_w_w_e.val(w_s-2);
		}
		if(length_ed1.val() == '2' && length_ed2.val() == '0,4' && !isNaN(w_s)){
			total_w_w_e.val((w_s-2-0.4).toFixed(1));
		}
		if(length_ed1.val() == '2' && length_ed2.val() == '2' && !isNaN(w_s)){
			total_w_w_e.val(w_s-2-2);
		}
		
		/* Getting total of length when width edged */
		if(width_ed1.val() == '-' && width_ed2.val() == '-' && !isNaN(l_s)){
			total_l_w_e.val(l_s);
		}
		if(width_ed1.val() == '-' && width_ed2.val() == '0,4' && !isNaN(l_s)){
			total_l_w_e.val(l_s-0.4);
		}
		if(width_ed1.val() == '0,4' && width_ed2.val() == '-' && !isNaN(l_s)){
			total_l_w_e.val(l_s-0.4);
		}
		if(width_ed1.val() == '0,4' && width_ed2.val() == '0,4' && !isNaN(l_s)){
			total_l_w_e.val((l_s-0.4-0.4).toFixed(1));
		}
		if(width_ed1.val() == '0,4' && width_ed2.val() == '2' && !isNaN(l_s)){
			total_l_w_e.val((l_s-0.4-2).toFixed(1));
		}
		if(width_ed1.val() == '-' && width_ed2.val() == '2' && !isNaN(l_s)){
			total_l_w_e.val(l_s-2);
		}
		if(width_ed1.val() == '2' && width_ed2.val() == '-' && !isNaN(l_s)){
			total_l_w_e.val(l_s-2);
		}
		if(width_ed1.val() == '2' && width_ed2.val() == '0,4' && !isNaN(l_s)){
			total_l_w_e.val((l_s-2-0.4).toFixed(1));
		}
		if(width_ed1.val() == '2' && width_ed2.val() == '2' && !isNaN(l_s)){
			total_l_w_e.val(l_s-2-2);
		}
		
		});
		
	// Grand total of panels:
	function loadtotalpanel() {
		var tpanel = 0;
		$('.quality').each(function () {
			var prodprice = Number($(this).val());
			tpanel = tpanel + prodprice;
		});
		$("#tot_panels").val(tpanel);
	}
	// Grand S total of panels:
	function loadgrandtotal() {
		var sum = 0;
		$('.total_s').each(function () {
			var prodprice = Number($(this).val());
			sum = sum + prodprice;
		});
		$("#tot_table_s").val(sum.toFixed(2));
	}
	// total value of each hidden input 'total_04':
	function loadgrandedge04() {
		var edg04 = 0;
		$('.class_f_mat_ed04').each(function () {
			var prodprice = Number($(this).val());
			edg04 = edg04 + prodprice;
		});
		$("#tot_edge_s04").val(edg04);
	}
	// total value of each hidden input 'total_08':
	function loadgrandedge08() {
		var edg08 = 0;
		$('.class_f_mat_ed08').each(function () {
			var prodprice = Number($(this).val());
			edg08 = edg08 + prodprice;
		});
		$("#tot_edge_s08").val(edg08);
	}
	// total value of each hidden input 'total_1':
	function loadgrandedge1() {
		var edg1 = 0;
		$('.class_f_mat_ed1').each(function () {
			var prodprice = Number($(this).val());
			edg1 = edg1 + prodprice;
		});
		$("#tot_edge_s1").val(edg1);
	}
	// total value of each hidden input 'total_2':
	function loadgrandedge2() {
		var edg2 = 0;
		$('.class_f_mat_ed2').each(function () {
			var prodprice = Number($(this).val());
			edg2 = edg2 + prodprice;
		});
		$("#tot_edge_s2").val(edg2);
	}
	// total value of each hidden input 'total_3':
	function loadgrandedge3() {
		var edg3 = 0;
		$('.class_f_mat_ed3').each(function () {
			var prodprice = Number($(this).val());
			edg3 = edg3 + prodprice;
		});
		$("#tot_edge_s3").val(edg3);
	}
	// to show div with loadgrandedge04-3 if value not '0':
	function div_showhide() {
		if($('.tot_edge_04').val() !== '0'){
				$(".div_edge04").css("display", "block");
		} else {
                $(".div_edge04").css("display", "none");
        }
		
		if($('.tot_edge_08').val() !== '0'){
				$(".div_edge08").css("display", "block");
		} else {
                $(".div_edge08").css("display", "none");
        }
		
		if($('.tot_edge_1').val() !== '0'){
				$(".div_edge1").css("display", "block");
		} else {
                $(".div_edge1").css("display", "none");
        }
		
		if($('.tot_edge_2').val() !== '0'){
				$(".div_edge2").css("display", "block");
		} else {
                $(".div_edge2").css("display", "none");
        }
		
		if($('.tot_edge_3').val() !== '0'){
				$(".div_edge3").css("display", "block");
		} else {
                $(".div_edge3").css("display", "none");
        }
	}
	
	/* To print cutlist form */
	$(".print_table").click(function () {
		print();
	});
	
	/* Sending data by email */
	/*
	$('#s_table').on('click', function(){
		$('#submit').trigger('click');
	});
	$('#submit').hide();
	*/
	$("#fname").blur(function(){
		$(this).css('background-color' , '#ffffff');
	});
	$("#phonenum").blur(function(){
		$(this).css('background-color' , '#ffffff');
	});
	
	$("#cut_f").submit(function(event) {
		var url = "dyn/send.php";
		var dataString = $(this).serialize();
		/* CHECKING INPUTS - START */
		var cut_name = $('#fname').val();
		var cut_num = $('#phonenum').val();
		var cut_size = $('#f_size').val();
		var cut_color = $('#f_nm').val();
		var cut_length = $('#f_ln').val();
		var cut_width = $('#f_wd').val();
		var cut_qty = $('#f_qt').val();
			
		if(cut_name == ''){
			$.alert("Укажите ФИО/ООО!", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'danger',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой  не отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
			});
			$('#fname').css('background-color' , '#feede6');
			$("#fname").focus();
			return false;
		}
		if(cut_num == ''){
			$.alert("Укажите # телефона!", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'danger',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой не отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
			});
			$('#phonenum').css('background-color' , '#feede6');
			$("#phonenum").focus();
			return false;
		}
		/* CHECKING INPUT SIZE START */
		if(cut_size == ''){
			$.alert("Укажите толщину материала!", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'danger',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой  не отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
			});
			$('#f_size').css('background-color' , '#feede6');
			$("#f_size").focus();
			return false;
		}
		/* CHECKING INPUT COLOR START */
		if(cut_color == ''){
			$.alert("Укажите цвет материала!", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'danger',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой  не отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
			});
			$('#f_nm').css('background-color' , '#feede6');
			$("#f_nm").focus();
			return false;
		}
		/* CHECKING INPUT LENGTH START */
		if(cut_length == ''){
			$.alert("Укажите длину заготовки!", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'danger',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой  не отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
			});
			$('#f_ln').css('background-color' , '#feede6');
			$("#f_ln").focus();
			return false;
		}
		/* CHECKING INPUT WIDTH START */
		if(cut_width == ''){
			$.alert("Укажите ширину заготовки!", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'danger',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой  не отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
			});
			$('#f_wd').css('background-color' , '#feede6');
			$("#f_wd").focus();
			return false;
		}
		/* CHECKING INPUT Qty START */
		if(cut_qty == ''){
			$.alert("Укажите необходимое кол-во заготовок!", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'danger',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой  не отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
			});
			$('#f_qt').css('background-color' , '#feede6');
			$("#f_qt").focus();
			return false;
		}
		/* CHECKING INPUTS - END*/
		/* SENDING ORDER BY AJAX WITH NOTIFICATION START */
		$.ajax({
			url: url,
			type: "POST",
			dataType: "text",
			data: dataString,
			success:function(data){
				$.alert("Ожидайте ответа в течении 24-х часов.", {
					autoClose: true,
					closeTime: 4000,
					withTime: false,
					type: 'success',
					position: ['top-right', [-0.42, 15]],
					title: "Раскрой отправлен",// title
					icon: false ,// e.g. icon:'glyphicon glyphicon-heart'
					close: '',
					speed: 'normal',
					isOnly: true,// If there is only one
					minTop: 120,
					// Animation options
					animation: false,
					animShow: 'fadeIn',
					animHide: 'fadeOut',
					onShow: function () {
					},
					onClose: function () {
					}
				});
			}		
		});
		$("#s_table").hide();
		$("#s_table_brick").show();
		$(".show_submit").show();
		event.preventDefault();
		return false;
		/* SENDING ORDER BY AJAX WITH NOTIFICATION END */
	});
	
	$(".show_submit").click(function(){
		$(".show_submit").hide();
		$("#s_table_brick").hide();
		$("#s_table").show();
		$(".f_comment").val("Внимание! Заказ откорректирован!\n\n" + $( ".f_comment").val());
	});
	
});