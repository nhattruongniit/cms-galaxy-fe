import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

// mui core
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from '@mui/material/Typography';

export default function KanbanCard({card, index}) {
    if (!card) return null;
    
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Card sx={{ minWidth: 275, mb: 2 }}>
                        <CardContent>
                        <Typography variant="body1" component="div">
                            {card.description}
                        </Typography>
                        <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
                            {card.name}
                        </Typography>
                        <AvatarGroup max={4} sx={{ mb: 1.5 }}>
                            {card?.assignee.length > 0 &&
                            card.assignee.map((ele) => (
                                <Avatar key={ele.id} alt={ele.name} src={ele.avatar} />
                            ))}
                        </AvatarGroup>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">View</Button>
                        </CardActions>
                    </Card>
                </div>
            )}
        </Draggable>
    )
}