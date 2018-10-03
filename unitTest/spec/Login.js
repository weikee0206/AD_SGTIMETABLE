describe("Main", function() {
  var login;
  var exit;
  var serialization;

  beforeEach(function() {
    login = new Login();
    exit = new Exit();
    serialization = new Serialization();

  });

  it("Serialization module code", function() {
    expect(serialization.convert('Se 902&GG')).toEqual('SE902GG');
  });


  it("should get a user id after login", function() {
    
    expect(login.submit('2')).toBe(true);


  });

  it("should purge the user login status after exit", function() {
    // exit.loginOut('FTCS217317');
        expect(exit.logout('300')).toBe(true);



  });


});
