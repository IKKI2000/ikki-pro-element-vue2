import Vue from 'vue';
import {
    Alert,
    Aside,
    Autocomplete,
    Avatar,
    Backtop,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Calendar,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    CascaderPanel,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Col,
    Collapse,
    CollapseItem,
    // CollapseTransition,
    ColorPicker,
    Container,
    DatePicker,
    Descriptions,
    DescriptionsItem,
    Dialog,
    Divider,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Empty,
    Footer,
    Form,
    FormItem,
    Header,
    Icon,
    Image,
    InfiniteScroll,
    Input,
    InputNumber,
    Link,
    Loading,
    Main,
    Menu,
    MenuItem,
    MenuItemGroup,
    Message,
    MessageBox,
    Notification,
    Option,
    OptionGroup,
    PageHeader,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    RadioButton,
    RadioGroup,
    Rate,
    Result,
    Row,
    Scrollbar,
    Select,
    Skeleton,
    SkeletonItem,
    Slider,
    Spinner,
    Statistic,
    Step,
    Steps,
    Submenu,
    Switch,
    TabPane,
    Table,
    TableColumn,
    Tabs,
    Tag,
    TimePicker,
    TimeSelect,
    Timeline,
    TimelineItem,
    Tooltip,
    Transfer,
    Tree,
    Upload,
} from 'element-ui';

Vue.use(Alert);
Vue.use(Aside);
Vue.use(Autocomplete);
Vue.use(Avatar);
Vue.use(Backtop);
Vue.use(Badge);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Calendar);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Cascader);
Vue.use(CascaderPanel);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Col);
Vue.use(Collapse);
Vue.use(CollapseItem);
// Vue.use(CollapseTransition);
Vue.use(ColorPicker);
Vue.use(Container);
Vue.use(DatePicker);
Vue.use(Descriptions);
Vue.use(DescriptionsItem);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Empty);
Vue.use(Footer);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Header);
Vue.use(Icon);
Vue.use(Image);
Vue.use(InfiniteScroll);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Link);
Vue.use(Loading.directive);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(PageHeader);
Vue.use(Pagination);
Vue.use(Popconfirm);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Rate);
Vue.use(Result);
Vue.use(Row);
Vue.use(Scrollbar);
Vue.use(Select);
Vue.use(Skeleton);
Vue.use(SkeletonItem);
Vue.use(Slider);
Vue.use(Spinner);
Vue.use(Statistic);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Submenu);
Vue.use(Switch);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(TimePicker);
Vue.use(TimeSelect);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Tooltip);
Vue.use(Transfer);
Vue.use(Tree);
Vue.use(Upload);

import Locale from 'element-ui/src/locale';
Locale.i18n((key, value) => Vue.$i18n.t(key, value));

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
