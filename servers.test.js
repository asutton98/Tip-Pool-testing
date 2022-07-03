describe("Servers test (with setup and tear-down)", ()=> {
  beforeEach(() => {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', () => {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update #servertable on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    
    expect(curTdList[0].innerHTML).toEqual('Alice');
    expect(curTdList[1].innerHTML).toEqual('$0.00');
    expect(curTdList[2].innerHTML).toEqual('X');
  });


  afterEach(() => {
    // teardown logic
    const billAmount = document.querySelector('#billAmt');
    const tipAmount = document.querySelector('#tipAmt');
    const serverName = document.querySelector('#serverName');

    billAmount.value = '';
    tipAmount.value = '';
    serverName.value = '';
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
