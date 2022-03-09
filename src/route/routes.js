import MainApp from "../apps/MainApp";
import LeftTemplateApp from "../apps/LeftTemplateApp";
import ListTemplateApp from "../apps/ListTemplateApp";

const routes =[
  {path:"/", layout:"/user",menubar:true, component:MainApp},
  {path:"/main", layout:"/user",menubar:true, component:MainApp},
  {path:"/tree", layout:"/user",menubar:true, component:LeftTemplateApp},
  {path:"/list", layout:"/user",menubar:true, component:ListTemplateApp},
]