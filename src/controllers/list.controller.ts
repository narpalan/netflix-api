
class ListController {

  public static async list(req, res){
    try{
      const myList = req.loggedUser?.list
      res.json(myList)
    }catch(e){

    }
  }

  public static async remove(req, res){}

}

export default ListController;
