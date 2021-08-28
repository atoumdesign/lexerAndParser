var alpha = [{symbol: "a", id: "id_a", enabled: true},
{symbol: "b", id: "id_b", enabled: true},
{symbol: "c", id: "id_c", enabled: true},
{symbol: "d", id: "id_d", enabled: true},
{symbol: "e", id: "id_e", enabled: true},
{symbol: "f", id: "id_f", enabled: true},
{symbol: "g", id: "id_g", enabled: true},
{symbol: "h", id: "id_h", enabled: true},
{symbol: "i", id: "id_i", enabled: true},
{symbol: "j", id: "id_j", enabled: true},
{symbol: "k", id: "id_k", enabled: true},
{symbol: "l", id: "id_l", enabled: true},
{symbol: "m", id: "id_m", enabled: true},
{symbol: "n", id: "id_n", enabled: true},
{symbol: "o", id: "id_o", enabled: true},
{symbol: "p", id: "id_p", enabled: true},
{symbol: "q", id: "id_q", enabled: true},
{symbol: "r", id: "id_r", enabled: true},
{symbol: "s", id: "id_s", enabled: true},
{symbol: "t", id: "id_t", enabled: true},
{symbol: "u", id: "id_u", enabled: true},
{symbol: "v", id: "id_v", enabled: true},
{symbol: "w", id: "id_w", enabled: true},
{symbol: "x", id: "id_x", enabled: true},
{symbol: "y", id: "id_y", enabled: true},
{symbol: "z", id: "id_z", enabled: true},
{symbol: "A", id: "id_A", enabled: true},
{symbol: "B", id: "id_B", enabled: true},
{symbol: "C", id: "id_C", enabled: true},
{symbol: "D", id: "id_D", enabled: true},
{symbol: "E", id: "id_E", enabled: true},
{symbol: "F", id: "id_F", enabled: true},
{symbol: "G", id: "id_G", enabled: true},
{symbol: "H", id: "id_H", enabled: true},
{symbol: "I", id: "id_I", enabled: true},
{symbol: "J", id: "id_J", enabled: true},
{symbol: "K", id: "id_K", enabled: true},
{symbol: "L", id: "id_L", enabled: true},
{symbol: "M", id: "id_M", enabled: true},
{symbol: "N", id: "id_N", enabled: true},
{symbol: "O", id: "id_O", enabled: true},
{symbol: "P", id: "id_P", enabled: true},
{symbol: "Q", id: "id_Q", enabled: true},
{symbol: "R", id: "id_R", enabled: true},
{symbol: "S", id: "id_S", enabled: true},
{symbol: "T", id: "id_T", enabled: true},
{symbol: "U", id: "id_U", enabled: true},
{symbol: "V", id: "id_V", enabled: true},
{symbol: "W", id: "id_W", enabled: true},
{symbol: "X", id: "id_X", enabled: true},
{symbol: "Y", id: "id_Y", enabled: true},
{symbol: "Z", id: "id_Z", enabled: true},
{symbol: "0", id: "id_0", enabled: true},
{symbol: "1", id: "id_1", enabled: true},
{symbol: "2", id: "id_2", enabled: true},
{symbol: "3", id: "id_3", enabled: true},
{symbol: "4", id: "id_4", enabled: true},
{symbol: "5", id: "id_5", enabled: true},
{symbol: "6", id: "id_6", enabled: true},
{symbol: "7", id: "id_7", enabled: true},
{symbol: "8", id: "id_8", enabled: true},
{symbol: "9", id: "id_9", enabled: true},
{symbol: " ", id: "id_space", enabled: true},
{symbol: "_", id: "id_underline", enabled: true},
{symbol: "<", id: "id_lt", enabled: true},
{symbol: ">", id: "id_gt", enabled: true},
{symbol: "(", id: "id_lp", enabled: true},
{symbol: ")", id: "id_rp", enabled: true},
{symbol: "=", id: "id_eq", enabled: true},
{symbol: "+", id: "id_plus", enabled: true},
{symbol: "-", id: "id_minus", enabled: true},
{symbol: "*", id: "id_asterisk", enabled: true},
{symbol: "/", id: "id_solidus", enabled: true},
{symbol: "\n", id: "id_return", enabled: true},
{symbol: "\t", id: "id_tab", enabled: true}];


function setAlphabet() {
   let id;
   for (let index = 0; index < alpha.length; index++) {
       id = document.getElementById(alpha[index].id);
       alpha[index].enabled = id.checked;
   }
}

function getAlphabet() {
   let id;
   for (let index = 0; index < alpha.length; index++) {
       id = document.getElementById(alpha[index].id);
       id.checked = alpha[index].enabled;
   }
}



