function save() {
  var Ek = document.getElementById('key');
  var k = Ek.value;
  var Ev = document.getElementById('value');
  var v = Ev.value;
  var data = get_data('store');
  data[k] = v;
  localStorage.setItem( 'store', JSON.stringify(data) )
  display('Saved ' + k + ' ' + v);

  Ek.value = '';
  Ev.value = '';
 
  return false;
}

function list_in_table() {
  var data = get_data('store');
  var has_keys = 0;
  for (var k in data) { has_keys++; break }

  if (has_keys) {
    var html = '<br><table><tr><td colspan="2">Listing</td></tr>';
    html += '<tr><th>English</th><th>Spanish</th></tr>';
    for (k in data) {
        html += '<tr><td>' + k + '</td><td>' + data[k] + '</td></tr>';
    }
    html += '</table>';
    display(html)   
    return false;
  }
  display('Empty');
  return false;
}
function clear() {
  localStorage.clear();
  display('');
  return false;
}

function display(html) {
  document.getElementById('response').innerHTML = html;
}
function get_data(field) {
  var data_str = localStorage.getItem(field);
  //console.log(data);
  if (data_str == null) {
    return {}
  }
  return JSON.parse(data_str)
}

