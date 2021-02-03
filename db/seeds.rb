# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Comment.destroy_all
Favorite.destroy_all
Coffee.destroy_all
User.destroy_all

@images = ['https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg',
'https://images.squarespace-cdn.com/content/v1/50437f72c4aa994481345d33/1598294782479-1R9TMFGS3VWSEP3ZTDAV/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/Latte+Art.jpg?format=1500w',
'https://www.dietwisecy.com/wp-content/uploads/2018/03/dietwise-coffee-limassol-dietitian-nutrition.jpg',
'https://i0.wp.com/www.ideatovalue.com/wp-content/uploads/2018/07/cup-of-coffee.jpg?fit=1003%2C579&ssl=1',
'https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/09/20/istock-157528129.jpg',
'https://taalamu.com/wp-content/uploads/2020/10/332-coffee-cup.jpg',
'https://www.fraserdental.co.nz/wp-content/uploads/2019/09/Coffee-pic-resized.jpg',
'https://see.news/wp-content/uploads/2020/10/coffee.jpeg',
'https://www.ledgerinsights.com/wp-content/uploads/2019/10/coffee.2-810x524.jpg',
'https://img.etimg.com/thumb/width-640,height-480,imgsize-617610,resizemode-1,msid-68253191/news/economy/agriculture/indias-coffee-exports-rise-13-per-cent-in-first-2-months-of-2019/coffee-exports-et.jpg',
'https://www.slashgear.com/wp-content/uploads/2019/07/coffee_main_envat-1280x720.jpg',
'https://www.xaprb.com/media/2017/02/unsplash-photos-XOhI_kW_TaM.jpg',
'https://images.wallpaperscraft.com/image/coffee_beans_grains_coffee_172935_1280x720.jpg',
'https://www.xtrafondos.com/en/descargar.php?id=4307&resolucion=1280x720',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH66H-ZAsmuFEQX7i3FZjXx37kZZ1rQy_4kQ&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUOfmoIq5RA-DZy5RDbErVWFYvVOgLquMig&usqp=CAU',
'https://static.onecms.io/wp-content/uploads/sites/43/2020/08/20/GettyImages-1165807395-2000.jpg',
'https://i.ebayimg.com/images/g/py8AAOSwckdboQUF/s-l1600.jpg']

60.times do
  Coffee.create!([{
    blend_name: Faker::Coffee.blend_name,
    origin: Faker::Coffee.origin,
    variety: Faker::Coffee.variety,
    notes: Faker::Coffee.notes,
    intensifier: Faker::Coffee.intensifier,
    caffeine_level: Faker::Number.within(range: 1..10),
    picture: @images[Faker::Number.within(range: 0..19)]
  }])
end
puts "#{Coffee.count} coffees created"
